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

## iPhone'a kurmak / App Store'a göndermek

Gerekenler: bir **Mac**, **Xcode** ve bir **Apple Developer** hesabı (yıllık ücretli).

1. `npm install` ve `npx cap sync ios` komutlarını çalıştırın.
2. `npx cap open ios` ile projeyi Xcode'da açın.
3. Xcode'da **App** hedefini seçin, **Signing & Capabilities** sekmesinde
   **Team** olarak Apple hesabınızı seçin.
4. iPhone'unuzu kabloyla bağlayıp ▶ (Run) ile telefona kurun.
5. App Store için: **Product → Archive**, ardından **Distribute App**.

## Otomatik kontrol

Bu dala her gönderimde GitHub Actions, projeyi iPhone simülatörü için derleyerek
hatasız olduğunu kontrol eder (`.github/workflows/ios-build.yml`).
