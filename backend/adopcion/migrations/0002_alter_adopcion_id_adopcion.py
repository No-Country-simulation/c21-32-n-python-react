# Generated by Django 5.1.2 on 2024-10-21 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adopcion', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adopcion',
            name='id_adopcion',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
