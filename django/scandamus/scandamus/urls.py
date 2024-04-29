from django.contrib import admin
from django.urls import path, include

# DefaultRouter => ViewSetに基づきRESTful APIのURLを生成
from rest_framework.routers import DefaultRouter
from players.views import PlayersViewSet
# インスタンス生成
router = DefaultRouter()
# エンドポイント登録
router.register(r'players', PlayersViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # ↓ router.urlsはrouter.register()で登録されたURLパターンリスト
    path('api/', include(router.urls))

    # DefaultRouterを使わずappのurlpatternsを使う場合、'app.urls'を指定
    # path('api/app/', include('app.urls'))
]
