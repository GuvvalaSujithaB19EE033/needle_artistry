from rest_framework import serializers
from .models import Collection
from .models import Blouse
from .models import Kurta
from .models import NightDress
from .models import Frocks
from .models import Skirt
from .models import Salwar
from .models import Lehenga
from .models import Appointment

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'
class BlouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blouse
        fields = '__all__'

class KurtaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kurta
        fields = '__all__'

class NightDressSerializer(serializers.ModelSerializer):
    class Meta:
        model = NightDress
        fields = '__all__'

class FrocksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frocks
        fields = '__all__'

class SkirtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skirt
        fields = '__all__'

class SalwarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salwar
        fields = '__all__'

class LehengaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lehenga
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'