from django.urls import path, include
from .views import CollectionListCreateView, CollectionDetailView, BlouseListCreateView, BlouseDetailView, KurtaListCreateView, KurtaDetailView, NightDressListCreateView, NightDressDetailView, FrocksListCreateView, FrocksDetailView, SkirtListCreateView, SkirtDetailView, SalwarListCreateView, SalwarDetailView, LehengaListCreateView, LehengaDetailView,AppointmentListCreateView, AppointmentDetailView




urlpatterns = [
    path('collections', CollectionListCreateView.as_view(),name='collection-list'),
    path('collections/<int:ok>/', CollectionDetailView.as_view(),name='collection-detail'),
    path('blouses', BlouseListCreateView.as_view(),name='blouse-list'),
    path('blouses/<int:ok>/', BlouseDetailView.as_view(),name='blouse-detail'),
    path('kurtas', KurtaListCreateView.as_view(),name='kurta-list'),
    path('kurtas/<int:ok>/', KurtaDetailView.as_view(),name='kurta-detail'),
    path('nightdresses', NightDressListCreateView.as_view(),name='nightdress-list'),
    path('nightdresses/<int:ok>/', NightDressDetailView.as_view(),name='nightdress-detail'),
    path('frocks', FrocksListCreateView.as_view(),name='frocks-list'),
    path('frocks/<int:ok>/', FrocksDetailView.as_view(),name='frocks-detail'),
    path('skirts',  SkirtListCreateView.as_view(),name='skirts-list'),
    path('skirts/<int:ok>/', SkirtDetailView.as_view(),name='skirts-detail'),
    path('salwars', SalwarListCreateView.as_view(),name='salwars-list'),
    path('salwars/<int:ok>/', SalwarDetailView.as_view(),name='salwars-detail'),
    path('lehengas', LehengaListCreateView.as_view(),name='lehengas-list'),
    path('lehengas/<int:ok>/', LehengaDetailView.as_view(),name='lehengas-detail'),
    path('appointments', AppointmentListCreateView.as_view(),name='appointments-list'),
    path('appointments/<int:ok>/', AppointmentDetailView.as_view(),name='appointments-detail'),
]