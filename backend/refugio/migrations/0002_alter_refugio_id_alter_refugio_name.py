# Generated by Django 5.1.2 on 2024-10-21 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('refugio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='refugio',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='refugio',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]