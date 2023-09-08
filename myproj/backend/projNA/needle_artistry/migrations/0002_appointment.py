# Generated by Django 4.2.4 on 2023-08-26 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('needle_artistry', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=10)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('description', models.TextField()),
            ],
        ),
    ]
