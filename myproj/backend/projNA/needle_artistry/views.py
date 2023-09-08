from django.shortcuts import render
from rest_framework import generics
from .models import Collection
from .models import Blouse
from .models import Kurta
from .models import NightDress
from .models import Frocks
from .models import Skirt
from .models import Salwar
from .models import Lehenga
from .models import Appointment
from .serializers import CollectionSerializer
from .serializers import BlouseSerializer
from .serializers import KurtaSerializer
from .serializers import NightDressSerializer
from .serializers import SkirtSerializer
from .serializers import SalwarSerializer
from .serializers import LehengaSerializer
from .serializers import FrocksSerializer
from .serializers import AppointmentSerializer


class CollectionListCreateView(generics.ListCreateAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class CollectionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
###
class BlouseListCreateView(generics.ListCreateAPIView):
    queryset = Blouse.objects.all()
    serializer_class = BlouseSerializer

class BlouseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blouse.objects.all()
    serializer_class = BlouseSerializer
###
class KurtaListCreateView(generics.ListCreateAPIView):
    queryset = Kurta.objects.all()
    serializer_class = KurtaSerializer

class KurtaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kurta.objects.all()
    serializer_class = KurtaSerializer
###
class NightDressListCreateView(generics.ListCreateAPIView):
    queryset = NightDress.objects.all()
    serializer_class = NightDressSerializer

class NightDressDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NightDress.objects.all()
    serializer_class = NightDressSerializer

###
class FrocksListCreateView(generics.ListCreateAPIView):
    queryset = Frocks.objects.all()
    serializer_class = FrocksSerializer

class FrocksDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Frocks.objects.all()
    serializer_class = FrocksSerializer
###
class SkirtListCreateView(generics.ListCreateAPIView):
    queryset = Skirt.objects.all()
    serializer_class = SkirtSerializer

class SkirtDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skirt.objects.all()
    serializer_class = SkirtSerializer

###
class LehengaListCreateView(generics.ListCreateAPIView):
    queryset = Lehenga.objects.all()
    serializer_class = LehengaSerializer

class LehengaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lehenga.objects.all()
    serializer_class = LehengaSerializer
 ###
class SalwarListCreateView(generics.ListCreateAPIView):
    queryset = Salwar.objects.all()
    serializer_class = SalwarSerializer

class SalwarDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Salwar.objects.all()
    serializer_class = SalwarSerializer

# Create your views here.
 ###
class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
