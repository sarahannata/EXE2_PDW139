function kirimData() {
  var title = document.getElementById('title').value;
  var singer = document.getElementById('singer').value;
  var tanggal = document.getElementById('tanggal').value;
  var genre = document.querySelector('input[name="genre"]:checked').value;
  var lyrics = document.getElementById('lyrics').value;
  var singertype = document.getElementById('selectOption').value;

  var hasil = "Title: " + title + "\n";
  hasil += "Singer: " + singer + "\n";
  hasil += "Released Date: " + tanggal + "\n";
  hasil += "Genre: " + genre + "\n";
  hasil += "Lyrics: " + lyrics + "\n";
  hasil += "Singer Type: " + singertype;

  alert(hasil);
}
