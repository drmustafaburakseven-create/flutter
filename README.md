# Minik Mola – iPhone uygulaması

Minik Mola web uygulamasının (ek gıdaya geçiş rehberi, tarifler, tadım albümü,
alışveriş listesi) iPhone uygulaması hâli. Uygulama
[Capacitor](https://capacitorjs.com) ile yapılmıştır: sitenin kendisi
(`www/` klasörü) uygulamanın içine gömülür, internet olmadan da çalışır.

## Klasörler

| Klasör | İçerik |
| --- | --- |
| `www/` | Uygulamanın tüm ekranları, tarifler, görseller (sitenin birebir kopyası) |
| `ios/` | Xcode ile açılan iPhone projesi |
| `capacitor.config.json` | Uygulama adı ve kimliği (`com.drmbs.minikmola`) |

## İçerik güncellemek

Tarif, metin veya görsel değişikliği `www/` klasöründe yapılır. Sonra:

```sh
npm install
npx cap sync ios
```

## Mac olmadan iPhone'a kurmak (Codemagic + TestFlight)

Uygulama Codemagic'in bulut Mac'lerinde derlenir ve TestFlight'a yüklenir.
Ayar dosyası hazır: `codemagic.yaml`. Aşağıdaki adımlar bir kez yapılır.

### 1. Apple Developer hesabı
[developer.apple.com/programs](https://developer.apple.com/programs/) adresinden
**Enroll** ile üye olun (yıllık ücretli). Onay birkaç gün sürebilir.

### 2. Uygulama kimliğini kaydedin ve uygulamayı oluşturun
1. [developer.apple.com/account](https://developer.apple.com/account) →
   **Certificates, IDs & Profiles** → **Identifiers** → **+**.
   **App IDs** → **App** seçin. Description: `Minik Mola`,
   Bundle ID (**Explicit**): `com.drmbs.minikmola` → **Continue** → **Register**.
2. [appstoreconnect.apple.com](https://appstoreconnect.apple.com) → **Apps** → **+** →
   **New App**. Platform: **iOS**, Name: `Minik Mola`, Primary Language:
   **Turkish**, Bundle ID: `com.drmbs.minikmola`, SKU: `minikmola` → **Create**.

### 3. App Store Connect API anahtarı
1. App Store Connect → **Users and Access** → **Integrations** sekmesi →
   **App Store Connect API** → **Team Keys** → **+**.
2. Name: `Codemagic`, Access: **App Manager** → **Generate**.
3. **Download** ile `.p8` dosyasını indirin (yalnız bir kez indirilebilir).
   Sayfadaki **Issuer ID** ve **Key ID** değerlerini not edin.

### 4. İmza anahtarı (Windows)
Windows'ta **PowerShell**'i açın ve şunu yazın:

```powershell
ssh-keygen -t rsa -b 2048 -m PEM -f minikmola_key
```

Şifre sorarsa iki kez **Enter**'a basın. Sonra `notepad minikmola_key` yazın;
açılan metnin tamamını (`-----BEGIN` ile başlayan) kopyalayın.

### 5. Codemagic ayarları
1. [codemagic.io](https://codemagic.io) → **GitHub** ile giriş yapın.
2. **Add application** → GitHub → `drmustafaburakseven-create/flutter` →
   proje türü **Ionic Capacitor App** (ya da **Other**) → **Finish**.
3. **Teams** → kendi takımınız → **Team integrations** →
   **Developer Portal / App Store Connect** → **Connect**:
   API key name: `Minik Mola` (tam olarak böyle), Issuer ID, Key ID ve `.p8`
   dosyası → **Save**.
4. Uygulama sayfasında **Environment variables** sekmesi:
   Variable name `CERTIFICATE_PRIVATE_KEY`, value: 4. adımda kopyaladığınız
   metin, Group: `minik_mola`, **Secret** işaretli → **Add**.

### 6. Derleme
Codemagic'te uygulamayı açın → **Start new build** → Branch: `minik-mola-app`,
Workflow: **Minik Mola · iPhone (TestFlight)** → **Start new build**.
Yaklaşık 15–20 dakika sürer.

### 7. iPhone'a kurulum
iPhone'a App Store'dan **TestFlight**'ı kurun ve Apple hesabınızla girin.
App Store Connect → uygulamanız → **TestFlight** → **Internal Testing** →
**+** ile kendinizi test edici olarak ekleyin. Minik Mola TestFlight'ta görünür.

## Mac ile kurmak (isteğe bağlı)

1. `npm install` ve `npx cap sync ios`
2. `npx cap open ios` ile Xcode'da açın, **Signing & Capabilities** →
   **Team** seçin, ▶ ile telefona kurun.

## Otomatik kontrol

Bu dala her gönderimde GitHub Actions, projeyi iPhone simülatörü için derleyerek
hatasız olduğunu kontrol eder (`.github/workflows/ios-build.yml`).
