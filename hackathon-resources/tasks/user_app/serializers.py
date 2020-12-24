from rest_framework import serializers
from .models import User
from task_app.serializers import TaskSerializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    my_tasks = TaskSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'my_tasks']
        extra_kwargs = {'password': {'write_only': True}}
        # write_only, so hashed password isn't passed in API response

    def create(self, data):
        user = User(email=data['email'], username=data['username'])
        user.set_password(data['password'])
        user.save()
        return user
        