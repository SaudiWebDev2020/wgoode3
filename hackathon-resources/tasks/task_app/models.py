from django.db import models
from user_app.models import User


class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    is_complete = models.BooleanField(default=False)
    due_date = models.DateField()
    creator = models.ForeignKey(User, related_name="my_tasks", on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    