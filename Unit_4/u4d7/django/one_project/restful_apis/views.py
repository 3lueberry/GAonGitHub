# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import TaskSerializer
from .models import Task

# Create your views here.

class TaskList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)   # default many=False

        return Response(serializer.data)


class TaskDetails(APIView):
    def get(self, request, pk):
        try:
            tasks = Task.objects.get(id=pk)
        except Exception as err:
            print(err)
            return Response({'status': 404, 'message': 'Not Found!'})

        serializer = TaskSerializer(tasks)

        return Response(serializer.data)


class TaskCreate(APIView):
    def put(self, request):
        serializer = TaskSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        else:
            return Response('Error with creating')


class TaskUpdate(APIView):
    def patch(self, request, pk):
        tasks = Task.objects.get(id=pk)
        serializer = TaskSerializer(instance=tasks, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


class TaskDelete(APIView):
    def delete(self, request, pk):
        tasks = Task.objects.get(id=pk)
        tasks.delete()

        return Response('task deleted')


class JwtDetails(APIView):
    print(IsAuthenticated)
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        response = JWTAuthentication().authenticate(request)
        if response is not None:
            user, token = response
            print(response)
            print(user)
            print(token)

            return Response(token.payload)
        else:
            return Response('None')
