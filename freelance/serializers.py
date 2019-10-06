from rest_framework import serializers
from .models import Job,Applyjob

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            'id',
            'title',
            'company',
            'indusrty',
            'type_of_job',
            'experience_level',
            'experience_time',
            'salary',
            'description',
            'requirements',
            'date_created',
            'date_modified'
        )

class ApplyjobSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Applyjob
        fields = (
                'firstname',
                'lastname',
                'phone_number',
                'minimum_qualification',
                'years_of_experience',
                'salary_expectation',
                'cover_letter',
                'curriculum_vitae'
                )