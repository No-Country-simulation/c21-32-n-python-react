# Generated by Django 5.1.2 on 2024-10-19 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_account_username_alter_account_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='lastname',
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='name',
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
    ]