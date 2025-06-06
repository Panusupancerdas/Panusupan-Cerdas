
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Phone, Mail, ExternalLink, Plus } from "lucide-react";

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const newsArticles = {
    "beasiswa-kip": {
      title: "Program Beasiswa KIP-Kuliah 2025 Telah Dibuka",
      date: "1 Juni 2025",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) kembali membuka pendaftaran Program Beasiswa Kartu Indonesia Pintar Kuliah (KIP-Kuliah) untuk tahun akademik 2025/2026.</p>
        
        <h3>Apa itu KIP-Kuliah?</h3>
        <p>KIP-Kuliah adalah program bantuan biaya pendidikan dari pemerintah bagi lulusan SMA/SMK/MA atau sederajat yang memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi.</p>
        
        <h3>Manfaat KIP-Kuliah:</h3>
        <ul>
          <li>Pembebasan biaya pendidikan (UKT)</li>
          <li>Bantuan biaya hidup sebesar Rp 700.000 per bulan</li>
          <li>Bantuan biaya buku dan alat tulis</li>
          <li>Bantuan biaya transportasi lokal</li>
        </ul>
        
        <h3>Syarat Pendaftaran:</h3>
        <ul>
          <li>Siswa SMA/SMK/MA atau sederajat yang akan lulus tahun 2025</li>
          <li>Lulusan tahun 2024 yang belu kuliah</li>
          <li>Memiliki potensi akademik baik</li>
          <li>Berasal dari keluarga kurang mampu secara ekonomi</li>
        </ul>
        
        <h3>Cara Mendaftar:</h3>
        <p>Pendaftaran dilakukan secara online melalui website resmi KIP-Kuliah di <a href="https://kip-kuliah.kemdikbud.go.id" target="_blank">kip-kuliah.kemdikbud.go.id</a></p>
        
        <p>Bagi warga Desa Panusupan yang membutuhkan bantuan pendaftaran, silakan hubungi tim kami di Balai Desa setiap hari Senin-Jumat pukul 08:00-16:00 WIB.</p>
      `
    },
    "workshop-utbk": {
      title: "Workshop Persiapan UTBK 2025 Sukses Digelar",
      date: "28 Mei 2025",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Balai Desa Panusupan kembali ramai dengan antusiasme para siswa yang mengikuti Workshop Persiapan UTBK (Ujian Tulis Berbasis Komputer) 2025 yang diselenggarakan pada 28 Mei 2025.</p>
        
        <h3>Antusiasme Tinggi Peserta</h3>
        <p>Sebanyak 50 siswa dari berbagai sekolah di wilayah Cilongok mengikuti workshop ini dengan penuh semangat. Para peserta terdiri dari siswa kelas 12 yang akan menghadapi UTBK tahun ini serta siswa kelas 11 yang ingin mempersiapkan diri lebih awal.</p>
        
        <h3>Materi Workshop</h3>
        <ul>
          <li>Strategi mengerjakan soal TPS (Tes Potensi Skolastik)</li>
          <li>Tips dan trik Literasi Bahasa Indonesia</li>
          <li>Cara efektif mengerjakan soal Penalaran Matematika</li>
          <li>Teknik manajemen waktu saat ujian</li>
          <li>Simulasi ujian dengan sistem CBT</li>
        </ul>
        
        <h3>Narasumber Berkualitas</h3>
        <p>Workshop ini menghadirkan narasumber dari alumni Desa Panusupan yang telah berhasil masuk PTN favorit, serta guru-guru berpengalaman dalam bimbingan UTBK.</p>
        
        <h3>Testimoni Peserta</h3>
        <blockquote>
          "Workshop ini sangat membantu saya memahami pola soal UTBK. Sekarang saya lebih percaya diri menghadapi ujian nanti." - Rina, Siswa SMAN 1 Cilongok
        </blockquote>
        
        <p>Kegiatan serupa akan terus diselenggarakan setiap bulan hingga pelaksanaan UTBK. Informasi jadwal workshop selanjutnya akan diumumkan melalui media sosial program EduKarir Panusupan.</p>
      `
    },
    "lulusan-ptn": {
      title: "Lulusan Desa Panusupan Diterima di PTN Favorit",
      date: "25 Mei 2025",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Kabar gembira datang dari Desa Panusupan! Tiga putra-putri terbaik desa berhasil menembus PTN favorit melalui jalur SNBP (Seleksi Nasional Berdasarkan Prestasi) 2025.</p>
        
        <h3>Profil Para Penerima</h3>
        
        <h4>1. Ahmad Fauzi - Universitas Indonesia</h4>
        <p>Diterima di Fakultas Teknik, Jurusan Teknik Elektro. Ahmad merupakan lulusan SMAN 1 Cilongok dengan prestasi juara 1 Olimpiade Fisika tingkat kabupaten.</p>
        
        <h4>2. Sari Dewi - Institut Teknologi Bandung</h4>
        <p>Diterima di Fakultas Matematika dan IPA, Jurusan Kimia. Sari aktif dalam penelitian sains sejak SMA dan pernah meraih medali emas di KSN Kimia.</p>
        
        <h4>3. Budi Santoso - Universitas Gadjah Mada</h4>
        <p>Diterima di Fakultas Ekonomika dan Bisnis, Jurusan Manajemen. Budi dikenal sebagai siswa yang aktif berorganisasi dan memiliki jiwa kepemimpinan tinggi.</p>
        
        <h3>Peran Program EduKarir</h3>
        <p>Ketiga siswa ini merupakan alumni peserta program bimbingan yang diselenggarakan oleh tim EduKarir Panusupan. Mereka mengikuti berbagai kegiatan mulai dari:</p>
        <ul>
          <li>Konsultasi pemilihan jurusan</li>
          <li>Bimbingan penulisan essay</li>
          <li>Workshop persiapan UTBK</li>
          <li>Mentoring dari alumni PTN</li>
        </ul>
        
        <h3>Pesan untuk Adik-Adik</h3>
        <blockquote>
          "Jangan pernah menyerah untuk mengejar mimpi. Dengan dukungan keluarga dan program EduKarir, tidak ada yang tidak mungkin." - Ahmad Fauzi
        </blockquote>
        
        <p>Keberhasilan mereka diharapkan dapat menginspirasi generasi muda Desa Panusupan lainnya untuk terus berprestasi dan meraih pendidikan tinggi yang berkualitas.</p>
        
        <h3>Apresiasi</h3>
        <p>Kepala Desa Panusupan memberikan apresiasi tinggi kepada para siswa berprestasi ini dan berkomitmen untuk terus mendukung program pendidikan di desa.</p>
      `
    }
  };

  const scheduleEvents = [
    {
      id: 1,
      title: "Workshop Pemilihan Jurusan",
      date: "2025-07-15",
      time: "09:00",
      duration: "3 jam",
      location: "Balai Desa Panusupan",
      description: "Workshop membantu siswa memilih jurusan yang sesuai dengan minat dan bakat"
    },
    {
      id: 2,
      title: "Seminar Karir IT",
      date: "2025-07-22",
      time: "13:00",
      duration: "3 jam",
      location: "Balai Desa Panusupan",
      description: "Seminar tentang peluang karir di bidang teknologi informasi"
    },
    {
      id: 3,
      title: "Bimbingan UTBK Batch 1",
      date: "2025-07-29",
      time: "08:00",
      duration: "9 jam",
      location: "Balai Desa Panusupan",
      description: "Bimbingan intensif persiapan UTBK untuk siswa kelas 12"
    }
  ];

  const addToGoogleCalendar = (event: any) => {
    const startDate = new Date(`${event.date}T${event.time}:00`);
    const endDate = new Date(startDate.getTime() + (3 * 60 * 60 * 1000)); // Add 3 hours
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const sendWhatsAppMessage = (formData: any) => {
    const message = `Halo! Saya ingin menghubungi EduKarir Panusupan.

Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone || '-'}
Subjek: ${formData.subject}

Pesan:
${formData.message}`;

    const whatsappUrl = `https://wa.me/6285399475748?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };
    sendWhatsAppMessage(data);
  };

  if (selectedArticle && newsArticles[selectedArticle as keyof typeof newsArticles]) {
    const article = newsArticles[selectedArticle as keyof typeof newsArticles];
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedArticle(null)}
                className="text-primary hover:text-primary/80"
              >
                ← Kembali ke Beranda
              </Button>
              <h1 className="text-xl font-semibold text-primary">EduKarir Panusupan</h1>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary">{article.date}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {article.title}
              </h1>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">EduKarir Panusupan</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Edukasi Karir dan Akses Perguruan Tinggi
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            Desa Panusupan
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Memberdayakan generasi muda Desa Panusupan dengan memberikan informasi, bimbingan karir, 
            dan akses pendidikan tinggi untuk masa depan yang lebih cerah.
          </p>
        </div>
      </section>

      {/* Berita Terbaru Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Berita Terbaru</h2>
            <p className="text-muted-foreground">Informasi Terkini Seputar Program dan Kegiatan</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(newsArticles).map(([key, article]) => (
              <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{article.date}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => setSelectedArticle(key)}
                  >
                    Baca Selengkapnya →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jadwal Kegiatan Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Jadwal Kegiatan Mendatang</h2>
            <p className="text-muted-foreground">Program Edukasi dan Bimbingan Karir</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scheduleEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">
                      {new Date(event.date).toLocaleDateString('id-ID', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time} WIB ({event.duration})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <Button 
                    onClick={() => addToGoogleCalendar(event)}
                    className="w-full"
                    variant="outline"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah ke Google Calendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Hubungi Kami</h2>
            <p className="text-muted-foreground">Mari Bergabung dan Wujudkan Impian Pendidikan serta Masa Depan Yang Cemerlang</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Alamat</h4>
                    <p className="text-muted-foreground">
                      Balai Desa Panusupan<br />
                      Kecamatan Cilongok, Kabupaten Banyumas<br />
                      Jawa Tengah
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Telepon</h4>
                    <p className="text-muted-foreground">+62 853-9947-5748</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">desakarir@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Jam Operasional</h4>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 08:00 - 16:00 WIB<br />
                      Sabtu: 08:00 - 12:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan via WhatsApp</CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan pesan akan dikirim langsung ke WhatsApp kami
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Nomor Telepon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subjek
                    </label>
                    <Select name="subject" required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih Subjek" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Informasi Program</SelectItem>
                        <SelectItem value="daftar">Pendaftaran</SelectItem>
                        <SelectItem value="volunteer">Menjadi Relawan</SelectItem>
                        <SelectItem value="beasiswa">Konsultasi Beasiswa</SelectItem>
                        <SelectItem value="loker">Informasi Lowongan</SelectItem>
                        <SelectItem value="lainnya">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 EduKarir Panusupan. Dibuat oleh Nawan S.Pd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
