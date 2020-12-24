from .models import Task
from rest_framework import serializers
from user_app.models import User

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    creator = serializers.CharField(read_only=True)
    creator_id = serializers.CharField(read_only=True)

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'is_complete', 'due_date', 'creator', 'creator_id', 'created_at', 'updated_at']

    def create(self, data):
        request = self.context.get('request', None)
        if request.user.is_authenticated:
            task = Task(
                title=data['title'],
                description=data['description'],
                is_complete=data['is_complete'],
                due_date=data['due_date'],
                creator=request.user
            )
            task.save()
            return task
        raise serializers.ValidationError({"errors": "You must be logged in to do this!"})