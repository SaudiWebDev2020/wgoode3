# Generated by Django 3.1.4 on 2020-12-20 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monster_api', '0002_auto_20201220_1040'),
    ]

    operations = [
        migrations.AlterField(
            model_name='monster',
            name='description',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='monster',
            name='height',
            field=models.FloatField(),
        ),
    ]