---
layout: post
title: Cara ribet memperbarui forked repo
date: 2020-01-29 01:00 +0700
modified: 2020-03-07 16:49:47 +07:00
description: Ada dua cara untuk memperbarui forked repository menggunakan web interface yang disediakan oleh github tapi ribet, atau melalui terminal yang lebih ribet lagi.
tag: [data]
image: /yeieje/_posts/cara-memperbarui-fork-repository/repo.png
---

Berawal dari saya pengen memperbarui repo yang tua dari suatu organisasi, niatnya pengen rumat ulang nih, ternyata dari orginal reponya ada update, sekalian buat artikel deh, lebih kurang gambaranya seperti ini.

<figure>

<img src="https://user-images.githubusercontent.com/74714697/100329442-00260100-3011-11eb-8bae-7b5c6a2d8ccf.jpg">


<img src="{{ page.image }}" alt="ilustrasi repo yang mau diupdate">
<figcaption>Fig 1. Gambaran ribetnya.</figcaption>
</figure>

Ada dua cara untuk memperbarui forked repository menggunakan web interface yang disediakan oleh github tapi ribet, atau melalui terminal yang lebih ribet lagi.

### Melalui Github (boring way) 💻

1. Buka repo yang hasil fork di Github.
1. Klik **Pull Requests** di sebelah kanan, lalu **New Pull Request**.
1. Akan memunculkan hasil compare antara repo upstream dengan repo kamu(forked repo), dan jika menyatakan "There isn’t anything to compare.", tekan link **switching the base**, yang mana sekarang repo kamu(forked repo) akan dibalik menjadi base repo dan repo upstream menjadi head repo.
1. Tekan **Create Pull Request**, beri judul pull request, Tekan **Send Pull Request**.
1. Tekan **Merge Pull Request** dan **Confirm Merge**.

\* _pastikan kamu tidak merubah apapun pada forked repo, supaya melakukan merge secara otomatis, kalo tidak ya paling2 konflik._

### Melalui terminal ⌨️

Tambahkan remote alamat repository yang aslinya disini tak beri nama `upstream`., ganti `ORIGINAL_OWNER` dan `ORIGINAL_REPO` dengan alamat repo aslimu.

```bash
$ git add remote upstream git@github.com:ORIGINAL_OWNER/ORIGINAL_REPO.git
$ git remote -v
> origin    git@github.com:piharpi/www.git (fetch) # forked repo
> origin    git@github.com:piharpi/www.git (push) # forked repo
> upstream    git@github.com:ORIGINAL_OWNER/ORIGINAL_REPO.git (fetch) # upstream repo / original repo
> upstream    git@github.com:ORIGINAL_OWNER/ORIGINAL_REPO.git (push) # upstream repo / original repo
```

Checkout ke local branch `master`.

```bash
$ git checkout master
> Switched to branch 'master'
```

Jika sudah, Merge local repo dengan remote `upstream/master`.

```bash
$ git merge upstream/master
```

Terakhir push local repo ke remote `origin`.

```bash
$ git add -A
$ git commit -m "updating origin repo" && git push -u origin master
```

Selamat mencoba cara ribet ini, semoga bisa dipahami, saya sendiri lebih senang melalui terminal, klo ada yang ribet kenapa cari yang mudah.

##### Resources

- [Syncing a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
- [Update your fork directly on Github](https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/#top)

이름은 윌슨. 웨이드 윌슨. 어쩌면 웨이드 T. 윌슨. **[Deadpool (1st series) #1]** 아마도 웨이드 윈스턴 윌슨. **[Cable & Deadpool #39]**  잭은 아냐. 절대 잭은 아니야. **[Deadpool (2nd series) #32-33]** 난 캐나다에서 왔어. 아니면 아메리카. 내 부모는 죽었어. 내가 그들을 죽였거든. **[Deadpool (4th series) #34]** 아닐 수도 있고. 하지만 그들은 분명히 죽었어. **[Cable & Deadpool #19]**  아니면 내 아버지는 아직 살아계실지도 모르지. **[Deadpool (2nd series) #45]** 그리고 어머니도. **[Deadpool (2nd series) #36]** 아니면-

으ㅏ! 너무 많이 묻지 마! 이게 뭐, Jeopardy 쇼*라도 되나?! 좋아, 그럼 다시 처음으로 돌아가서...

###### *Jeopardy 쇼. 퀴즈쇼. 질문을 받으면 질문으로 대답해야 하는 쇼라고 함.
<br/>

* * *
<br/>
웨이드 윌슨의 정신은 꽤 엉망이다. __[Cable & Deadpool #8]__ 그의 재생세포는 정상적인 뇌 기능을 방해하고, ADHD, 충동조절, 조현병, 조증, 환각, 장/단기 기억상실증 등의 여러 증상을 만들어냈다. 게다가 웨폰 X 프로그램에서 도망친 이후 여러 해 동안 데드풀은 버틀러 조직에 붙잡혀 실험을 당했다. 버틀러는 기억을 파괴하는 약물 '타불라라사'를 이용하여 데드풀의 정신을 더욱 뒤틀고 데드풀의 잠재의식에 가상 현실을 심기도 했다. __[Deadpool (4th series) #16, 19]__  이는 데드풀의 기억을 서로 모순되게끔 만들었다. 때때로 데드풀은 그의 정신을 말끔하게 정리하기도 했을 거고, 또 과거에 대한 진실을 알아차리기도 했을 거다. ...하지만 이들 기억은 아직도 서로 모순되어 있다. 그렇다면 무엇이 진실이고 무엇이 거짓일까? 아무도 확실히 알 수 없을 것이다.  <br/>
<br/>
한 에피소드에 따르면 웨이드 윌슨은 군인의 자식으로 오하이오에서 태어났다. 그의 아버지는 육군 장교였고 가족은 아메리카와 캐나다 군부대 사이를 따라 자주 이사했다. 웨이드가 고작 5살이던 해, 어머니가 암으로 돌아가시면서 그의 가정사는 더욱 복잡해졌다. 부자지간의 거리는 한층 더 멀어졌고, 웨이드는 청소년이 되면서 품행이 불량한 무리들과 어울려 다니기 시작했다. 어느 날 웨이드의 아버지는 아들 웨이드를 데려오기 위해 pool hall로 찾아왔으나 웨이드는 그를 거부했다. 웨이드의 양아치 친구 중 하나는 웨이드의 아버지를 맥주병으로 가격 후 옆구리에 찬 총을 꺼내어 그를 쐈다. 웨이드는 제 아버지가 pool hall의 바닥에서 피를 흘리며 죽어가는 걸 보았다. 부자간의 관계는 절대 회복될 수 없었다. __[Cable & Deadpool #19]__
<br/>
