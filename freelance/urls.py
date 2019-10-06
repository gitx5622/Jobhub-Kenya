from .views import JobViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api', JobViewSet, basename='jobs')
urlpatterns = router.urls

