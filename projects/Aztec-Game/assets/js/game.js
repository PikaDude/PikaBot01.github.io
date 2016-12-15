window.onload = function () {
    var score = 0;
    enchant();
    var left = false;
    var right = false;
    var up = false;
    var down = false;
    var playing = false;
    var trees = [];
    var speed = 0;
    var time = null;
    var oldPos = null;
    var aztecs = [];
    var aztecPos = [];
    var aztecSpeed = [];
    var READY = false;
    var game = new Game(512, 512);
    game.fps = 60;
    game.preload(
        'assets/audio/bgm (compressed).mp3',
        'assets/images/player.png',
		'assets/images/red.png',
        'assets/images/grass.png',
		'assets/images/tree.png',
        'assets/audio/gud.mp3',
        'assets/audio/airhorn.mp3',
        'assets/audio/bad.mp3'
        );
    game.onload = function () {
        var menu = new Scene();
        game.pushScene(menu);
        var title = new Label("Aztec Explorations");
        menu.addChild(title);
        title.font = "30px swag";
        title.x = (game.width / 5);
        var help = new Label("You play as a European Explorer, John Smith,     whose job is to explore the Americas and find a  spot for the first english settlement,                          Jamestown. You must search through the                 Ancient Aztec lands for possible settlement      sites,  which are marked by red squares. You            must avoid agitated Aztecs and obstacles which will slow you down. You have a time limit of 100 seconds so be quick! Use W, A, S and D to move          yourself around.");
        menu.addChild(help);
        help.x = (game.width / 5);
        help.y = 40;
        help.font = "12px swag";
        var start = new Label("Press ENTER to begin.");
        menu.addChild(start);
        start.x = (game.width / 3);
        start.y = 220;
        start.font = "15px swag";
        game.addEventListener('enterframe', function () {
            if (game.input.play && playing == false) {
                play();
            }
            if (game.input.play && playing == "ded") {
                location.reload();
            }
            game.keybind(13, 'play');
        });
        var myAudio = new Audio('assets/audio/bgm (compressed).mp3');
        var airhorn = new Audio('assets/audio/airhorn.mp3');
        var gud = new Audio('assets/audio/gud.mp3');
        var bad = new Audio('assets/audio/bad.mp3');
        myAudio.addEventListener('ended', function () {
            myAudio.currentTime = 0;
            myAudio.play();
        }, false);
        myAudio.play();
        function play() {
            playing = true;
            time = new Date();
            game.popScene();
            var hero = new Sprite(16, 24);
            var background = new Sprite(512, 480);
            var level = new Scene();
            var label = new Label();
            var memesLOL = new Label();
            memesLOL.y = 20;
            memesLOL.color = "#FFF";
            label.color = "#FFF";
            label.font = '20px swag';
            memesLOL.font = '20px swag';
            oldPos = [hero.x, hero.y];
            game.pushScene(level);
            level.addChild(background);
            background.image = game.assets['assets/images/grass.png'];
            level.addChild(hero);
            hero.x = (game.width - 20);
            level.addChild(label);
            level.addChild(memesLOL);
            hero.image = game.assets['assets/images/player.png'];
            var red = new Sprite(50, 50);
            level.addChild(red);
            red.image = game.assets['assets/images/red.png'];
            regen();
            function end() {
                game.popScene();
                var scene = new Scene();
                game.pushScene(scene);
                var aaa = new Label();
                scene.addChild(aaa);
                aaa.text = score;
                aaa.y = 20;
                aaa.x = (game.width / 2);
                aaa.font = '50px swag';
                var bbb = new Label();
                scene.addChild(bbb);
                bbb.text = "Sites Explored";
                bbb.y = 70;
                bbb.x = (game.width / 3);
                bbb.font = '30px swag';
                document.cookie = "best=" + score;
                var NEWBEST = new Label();
                if (score > parseInt(document.cookie.slice(5)) || document.cookie == "") {
                    scene.addChild(NEWBEST);
                    NEWBEST.text = "NEW RECORD!";
                    NEWBEST.y = 110;
                    NEWBEST.x = (game.width / 2.05);
                    NEWBEST.font = '10px swag';
                }
                playing = "ded";
                var PLAYAGAINPLS = new Label();
                scene.addChild(PLAYAGAINPLS);
                PLAYAGAINPLS.y = 300;
                PLAYAGAINPLS.font = '20px swag';
                PLAYAGAINPLS.text = "Press ENTER to play again!";
                PLAYAGAINPLS.x = (game.width / 3.5);
            }
            function regen() {
                READY = false;
                var meme = 0;
                while (meme != trees.length) {
                    level.removeChild(trees[meme]);
                    meme++;
                }
                var meme = 0;
                while (meme != aztecs.length) {
                    level.removeChild(aztecs[meme]);
                    meme++;
                }
                trees.length = 0;
                aztecs = [];
                aztecPos = [];
                aztecSpeed = [];
                red.x = Math.floor((Math.random() * (background.width - 120)) + 15);
                red.y = Math.floor((Math.random() * (background.height - 120)) + 25);
                var max = Math.floor((Math.random() * 5) + 0);
                var current = 0;
                if (score != 0) {
                    while (current != max) {
                        var aztec = new Sprite(16, 24);
                        level.addChild(aztec);
                        aztec.image = game.assets['assets/images/player.png'];
                        aztec.frame = [2];
                        aztec.x = Math.floor((Math.random() * (background.width - 40)) + 15);
                        aztec.y = Math.floor((Math.random() * (background.height - 60)) + 25);
                        aztecs.push(aztec);
                        aztecPos.push([aztec.x, aztec.y]);
                        aztecSpeed.push(2);
                        current++;
                    }
                }
                var max1 = Math.floor((Math.random() * 100) + 5);
                var current1 = 0;
                while (current1 != max1) {
                    var tree = new Sprite(32, 32);
                    level.addChild(tree);
                    tree.image = game.assets['assets/images/tree.png'];
                    current1++;
                    tree.x = Math.floor((Math.random() * (background.width - 40)) + 15);
                    tree.y = Math.floor((Math.random() * (background.height - 60)) + 25);
                    trees.push(tree);
                }
                READY = true;
            }
            game.addEventListener('enterframe', function () {
                label.text = "Sites Explored: " + score;
                memesLOL.text = "Time Remaining: " + (100 + ((Date.parse(time) - Date.parse(new Date())) / 1000));
                var kek = 0;
                while (kek != aztecs.length) {
                    var xy = 0;
                    var xx = hero.x - aztecs[kek].x;
                    if (xx < 0) {
                        xx = - xx;
                    }
                    var yy = hero.y - aztecs[kek].y;
                    if (yy < 0) {
                        yy = -yy;
                    }
                    if (xx > yy) {
                        xy = 0;
                    }
                    else {
                        xy = 1;
                    }
                    if (xy == 0) {
                        if (hero.x - aztecs[kek].x >= 0) {
                            aztecs[kek].x += aztecSpeed[kek];
                            aztecs[kek].frame = [18, 18, 18, 26, 26, 26];
                            aztecs[kek].scaleX = 1;
                        } else {
                            aztecs[kek].scaleX = -1;
                            aztecs[kek].frame = [18, 18, 18, 26, 26, 26];
                            aztecs[kek].x -= aztecSpeed[kek];
                        }
                    }
                    if (xy == 1) {
                        if (hero.y - aztecs[kek].y >= 0) {
                            aztecs[kek].scaleX = 1;
                            aztecs[kek].frame = [2, 2, 2, 10, 10, 10];
                            aztecs[kek].y += aztecSpeed[kek];
                        } else {
                            aztecs[kek].scaleX = 1;
                            aztecs[kek].frame = [42, 42, 42, 34, 34, 34];
                            aztecs[kek].y -= aztecSpeed[kek];
                        }
                    }
                    kek++;
                }
                if (hero.within(red, 35)) {
                    score++;
                    gud.play();
                    regen();
                }
                document.onkeydown = function (e) {
                    if (e.keyCode == 65) left = true;
                    if (e.keyCode == 68) right = true;
                    if (e.keyCode == 87) up = true;
                    if (e.keyCode == 83) down = true;
                };
                document.onkeyup = function (e) {
                    if (e.keyCode == 65) left = false;
                    if (e.keyCode == 68) right = false;
                    if (e.keyCode == 87) up = false;
                    if (e.keyCode == 83) down = false;
                };
                if (left && !right && hero.x > 0) {
                    hero.x -= speed;
                    hero.scaleX = -1;
                    hero.frame = [16, 16, 16, 24, 24, 24];
                }
                if (right && !left && hero.x < (background.width - 15)) {
                    hero.x += speed;
                    hero.scaleX = 1;
                    hero.frame = [16, 16, 16, 24, 24, 24];
                }
                if (up && !down && hero.y > 0) {
                    hero.y -= speed;
                    hero.scaleX = 1;
                    hero.frame = [32, 32, 32, 40, 40, 40, 13, 13, 13, 40, 40, 40];
                }
                if (down && !up && hero.y < (background.height - 25)) {
                    hero.y += speed;
                    hero.scaleX = 1;
                    hero.frame = [0, 0, 0, 8, 8, 8, 12, 12, 12, 8, 8, 8];
                }
                if (!left && !right && !up && !down) {
                    hero.frame = [0];
                }
                if (((Date.parse(time) - Date.parse(new Date())) / 1000) < -99) {
                    time = null;
                    airhorn.play();
                    end();
                }
                var spaghetti = 0;
                var mee = false;
                while (spaghetti != trees.length) {
                    if (hero.within(trees[spaghetti], 20)) {
                        speed = 0.5;
                        mee = true;
                    } else {
                        if (mee == false) {
                            speed = 2;
                        }
                    }
                    spaghetti++;
                }
                if (READY) {
                    var kek = 0;
                    while (kek != aztecs.length) {
                        var hm = 0;
                        var memes = false;
                        while (hm != trees.length) {
                            if (aztecs[kek].within(trees[hm])) {
                                if (memes == false) {
                                    aztecSpeed[kek] = 0.5;
                                    memes = true;
                                }
                            } else {
                                if (memes == false) {
                                    aztecSpeed[kek] = 2;
                                }
                            }
                            if (aztecs[kek].within(hero)) {
                                bad.play();
                                READY = false;
                                regen();
                                return;
                            }
                            hm++;
                        }
                        kek++;
                    }
                }
            });
        }
    };
    game.start();
}