document.getElementById("PlayerForm").addEventListener('submit', saveReport);

function saveReport() {
    var P_Name = document.getElementById('NameInput').value;
    var P_Position = document.getElementById('PlayerPosition').value;
    var P_Report = document.getElementById('Describe').value;
    var Pid = chance.guid();

    var player = {
        id: Pid,
        name: P_Name,
        position: P_Position,
        report: P_Report,
        status: "OPEN"
    }

    if (localStorage.getItem('players') == null) {
        var players = [];
        players.push(player);
        localStorage.setItem('players',JSON.stringify(players));
    }else {
        var players=JSON.parse(localStorage.getItem('players'));
        players.push(player);
        localStorage.setItem('players',JSON.stringify(players));
    }

    fetchPlayers();
}

function fetchPlayers() {
    var players = JSON.parse(localStorage.getItem('players'));
    var playerList = document.getElementById('playerList');

    playerList.innerHTML = '';

    for (var i = 0; i < players.length; i++) {
        var id = players[i].id;
        var name = players[i].name;
        var position = players[i].position;
        var report = players[i].report;
        var status = players[i].status;

        playerList.innerHTML += '<div class = "playerBlock" >' + '<h6>Player Id :' + id + '</h6>' + '<p class="label label-info">' + status + '</p>' +
            '<h3>' + name + '</h3>' +
            '<p><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span> ' + position + '</p>' +
            '<p><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span> ' + report + '</p>' +
            '<a href="#" onclick="stopScouting(\'' + id + '\')" class="btn btn-warning">Stop</a>' +
            '<a href="#" onclick="deleteReport(' + id + ')" class="btn btn-danger">Stop</a>' + '</div>';
    }
}
