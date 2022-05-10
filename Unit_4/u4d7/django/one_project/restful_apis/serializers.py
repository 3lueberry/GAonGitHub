from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        # exclude = ['completed',]

    def validate_title(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Title has to be at least 5 characters long.')

        return value

