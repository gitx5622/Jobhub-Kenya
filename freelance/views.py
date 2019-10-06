from .serializers import JobSerializer
from .models import Job
from rest_framework import viewsets


class JobViewSet(viewsets.ModelViewSet):

    serializer_class = JobSerializer
    queryset = Job.objects.all()
