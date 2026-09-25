document.addEventListener("DOMContentLoaded", function () {

    /* =================================
       1. ANIMASI FOTO SAAT SCROLL
    ================================= */

    const cards = document.querySelectorAll(".card-animate");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach(function (card) {
        observer.observe(card);
    });


    /* =================================
       2. EFEK TOMBOL DITEKAN
    ================================= */

    const buttons = document.querySelectorAll(".sound");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Getaran HP
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }

            // Suara klik
            try {

                const AudioContext =
                    window.AudioContext ||
                    window.webkitAudioContext;

                if (!AudioContext) return;

                const audioContext =
                    new AudioContext();

                const oscillator =
                    audioContext.createOscillator();

                const gain =
                    audioContext.createGain();

                oscillator.frequency.value = 550;

                gain.gain.value = 0.04;

                oscillator.connect(gain);

                gain.connect(
                    audioContext.destination
                );

                oscillator.start();

                oscillator.stop(
                    audioContext.currentTime + 0.08
                );

            } catch (error) {

                console.log(
                    "Audio tidak tersedia"
                );

            }

        });

    });


    /* =================================
       3. FOTO GALERI BISA DIPERBESAR
    ================================= */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );

    galleryImages.forEach(function (image) {

        image.addEventListener(
            "click",
            function () {

                const overlay =
                    document.createElement("div");

                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";

                overlay.style.background =
                    "rgba(0,0,0,0.85)";

                overlay.style.display = "flex";

                overlay.style.alignItems =
                    "center";

                overlay.style.justifyContent =
                    "center";

                overlay.style.zIndex = "9999";

                overlay.style.cursor =
                    "pointer";


                const bigImage =
                    document.createElement("img");

                bigImage.src = image.src;

                bigImage.style.maxWidth =
                    "90%";

                bigImage.style.maxHeight =
                    "85%";

                bigImage.style.borderRadius =
                    "20px";

                bigImage.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,.5)";


                overlay.appendChild(bigImage);

                document.body.appendChild(
                    overlay
                );


                overlay.addEventListener(
                    "click",
                    function () {

                        overlay.remove();

                    }
                );

            }
        );

    });


    /* =================================
       4. EMOT BERTERBANGAN 🩵✨🌸🦋
    ================================= */

    const emot = [
        "🩵",
        "🌸",
        "✨",
        "🌿",
        "🌷",
        "💫",
        "🦋",
        "🤍"
    ];


    function buatEmot() {

        const el =
            document.createElement("div");

        el.className =
            "floating-emot";


        // Pilih emot secara acak
        el.textContent =
            emot[
                Math.floor(
                    Math.random() * emot.length
                )
            ];


        // Posisi kiri secara acak
        el.style.left =
            Math.random() * 100 + "vw";


        // Ukuran emot acak
        el.style.fontSize =
            (16 + Math.random() * 18) + "px";


        // Kecepatan acak
        el.style.animationDuration =
            (5 + Math.random() * 4) + "s";


        document.body.appendChild(el);


        // Hapus emot setelah selesai
        setTimeout(
            function () {

                el.remove();

            },
            10000
        );

    }


    /* =================================
       5. JALANKAN EMOT
    ================================= */

    setInterval(
        buatEmot,
        1500
    );

});