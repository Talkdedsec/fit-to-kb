![Fit to KB — Small files. Less friction.](docs/assets/banner.png)

# Fit to KB

**Fotoğraflarını tarayıcında istediğin dosya boyutuna küçült.**

[Uygulamayı aç](https://talkdedsec.github.io/fit-to-kb/) · [English](README.md) · **Türkçe**

Fit to KB, Türkçe ve İngilizce kullanılabilen ücretsiz bir fotoğraf küçültme aracıdır. Üyelik, yükleme API’si, analiz takibi veya API anahtarı gerektirmez. Fotoğraflar cihazında işlenir.

## Özellikler

- 200 KB, 500 KB, 1 MB veya özel dosya boyutu sınırına küçültme.
- Aynı anda en fazla 20 fotoğraf; tek tek veya ZIP olarak indirme.
- Önce/sonra önizlemesi, dosya boyutu ve çıktı ölçülerini karşılaştırma.
- En-boy oranını koruyarak isteğe bağlı maksimum genişlik ve yükseklik.
- JPEG, PNG ve WebP okuma ve çıktı alma.
- İngilizce/Türkçe dil seçimi ve açık/koyu tema.
- Masaüstü ve mobil ekranlara uyumlu arayüz.

## Kullanım

1. Fotoğraflarını sayfaya sürükle veya dosya seç.
2. Hedef KB sınırını, isteğe bağlı ölçüleri ve çıktı formatını belirle.
3. **Fotoğrafları küçült** düğmesine bas, sonuçları incele ve indir.

Uygulama tarayıcının dilinde açılır. Dili değiştirmek için **TR** veya **EN** düğmesine bas; seçtiğin dil cihazında hatırlanır.

## Yerelde çalıştırma

Node.js 22.13 veya üzeri gerekir.

```sh
npm ci
npm run dev
```

## Yayınlama

Kodu `main` dalına gönder; depo Settings → Pages bölümünde **GitHub Actions** seç. Hazır iş akışı kontrolleri çalıştırır ve uygulamayı yayınlar. `npm run build` statik siteyi `dist/` altına yazar; göreli dosya yolları depo alt yollarını destekler. `npm run preview` derlemeyi yerelde açar.

## Kontroller

```sh
npm run typecheck
npm run lint
npm test
```

Testler, benzetilmiş bir kodlayıcıyla küçültme kararlarını ve statik dosya yollarını kontrol eder. Gerçek fotoğraflarla tarayıcı testinin yerini tutmaz.

## Davranış ve sınırlar

- En fazla 20 dosya, dosya başına 30 MB; hedef 1–50.000 KB. 1 KB = 1.000 bayt.
- İndirmeden önce boyut sınırı kontrol edilir. JPEG/WebP için önce kalite, gerekirse çözünürlük azaltılır. PNG için çözünürlük azaltılır. Ulaşılamayan hedeflerde hata gösterilir.
- En-boy oranı korunur; fotoğraf büyütülmez. İşleme alanı 16 megapiksel ile sınırlıdır. Girdi dosyasının açılması cihaz belleğine bağlıdır.
- JPEG şeffaf alanları beyaz yapar. PNG ve WebP şeffaflığı korur.
- Canvas ve `createImageBitmap` destekleyen güncel bir tarayıcı gerekir. HEIC, SVG, GIF ve PDF desteklenmez. Animasyonlu WebP tek kareye dönüşür.
- Yeniden kodlama özgün meta verileri kaldırır; zaten uygun ve daha küçük olan özgün dosya meta verileriyle birlikte yeniden kullanılabilir.
- Dosyalar kaldırılana veya sekme kapanana kadar tarayıcı belleğinde kalır. Ayar değişiklikleri için yeniden küçültme gerekir.
