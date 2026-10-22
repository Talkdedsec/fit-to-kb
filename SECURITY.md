# Security policy · Güvenlik politikası

## English

Do not open a public issue for a vulnerability. Report it privately:

- **Security → Report a vulnerability** on this repository, or
- email **talkdedsec@proton.me** with `fit-to-kb` in the subject.

Acknowledgement within 72 hours, assessment within 7 days.

### In scope

- Anything that sends an image, its file name or its metadata off the device. Compression runs in
  the browser; nothing should be uploaded.
- Script injection through a crafted file name, EXIF field or image.
- A vulnerable dependency that is actually reachable from the shipped page.

### Out of scope

- Output quality or a result that misses the target size by a little.
- Attacks that need control of the browser or the machine already.

## Türkçe

Güvenlik açığı için herkese açık issue açma. Gizli bildir:

- bu repoda **Security → Report a vulnerability**, ya da
- konu satırında `fit-to-kb` geçen bir e-postayla **talkdedsec@proton.me**.

72 saat içinde dönüş, 7 gün içinde değerlendirme.

### Kapsamda

- Görseli, dosya adını ya da meta verisini cihaz dışına gönderen her şey. Sıkıştırma tarayıcıda
  yapılır; hiçbir şey yüklenmemeli.
- Özel hazırlanmış dosya adı, EXIF alanı ya da görselle script çalıştırma.
- Yayınlanan sayfadan gerçekten erişilebilen açıklı bir bağımlılık.

### Kapsam dışı

- Çıktı kalitesi ya da hedef boyutu biraz kaçıran sonuç.
- Tarayıcının ya da makinenin zaten ele geçirilmiş olmasını gerektiren saldırılar.
