    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    // Ajuste la taille du canvas à celle de la fenêtre
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    let painting = false;

    // Options de pinceau
    let brushColor = document.getElementById('colorPicker').value;
    let brushSize = document.getElementById('brushSize').value;

    // Démarrer le dessin
    function startPosition(e) {
        painting = true;
        draw(e);
    }

    // Arrêter le dessin
    function endPosition() {
        painting = false;
        ctx.beginPath(); // Redémarre une nouvelle ligne pour éviter des points de connexion
    }

    // Dessiner sur le canvas
    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = brushColor;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    // Événements de souris
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    // Changer la couleur
    document.getElementById('colorPicker').addEventListener('input', (e) => {
        brushColor = e.target.value;
    });

    // Changer la taille du pinceau
    document.getElementById('brushSize').addEventListener('input', (e) => {
        brushSize = e.target.value;
    });

    // Effacer le canvas
    document.getElementById('clearCanvas').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
