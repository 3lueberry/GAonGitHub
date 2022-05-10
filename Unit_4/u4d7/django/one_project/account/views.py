# from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView


from .serializers import AccountSerializer
from .models import AccountManager

# Create your views here.


class CreateAccount(APIView):
    def put(self, request):
        serializer = AccountSerializer(data=request.data)

        if serializer.is_valid():
            account_manager = AccountManager()
            user = account_manager.create_user(
                email = serializer.data['email'],
                name = serializer.data['name'],
                surname = serializer.data['surname'],
                password = serializer.data['password']
            )

            return Response(user)
        else:
            return Response('Error with creating')
