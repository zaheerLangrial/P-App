# Generated by Django 4.2.16 on 2024-11-29 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_confirmedornot'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ConfirmedOrNot',
            new_name='RequestResponse',
        ),
    ]
