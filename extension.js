function channels(req) {
    var data = [
        ["Antena 3", "antena3.png", "http://a3live-lh.akamaihd.net/i/a3hls/antena3_1@35248/master.m3u8"],
        // This stream hangs AVFoundation, disable for now
        // ["Cuatro", "cuatro.png", "http://cdn.sstream.pw/live/cuatro_xrf2a3/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        // This stream hangs AVFoundation, disable for now
        // ["FDF", "fdf.png", "http://cdn.sstream.pw/live/fdfhd_xrewtt/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        ["Divinity", "divinity.png", "http://cdn.sstream.pw/live/diniiiii_9fil4ag/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        ["Energy", "energy.png", "http://cdn.sstream.pw/live/energy_azhls60/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        ["Euronews", "euronews.png", "http://fr-par-iphone-1.cdn.hexaglobe.net:80/streaming/euronews_ewns/iphone_es.m3u8"],
        ["La Sexta", "lasexta.png", "http://a3live-lh.akamaihd.net/i/l6hls/lasexta_1@35272/master.m3u8"],
        ["Neox", "neox.png", "http://cdn.sstream.pw/live/neox_alwkw2n/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        ["Nova", "nova.png", "http://cdn.sstream.pw/live/nova2_acolsfq/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        ["Telecinco", "telecinco.png", "http://cdn.sstream.pw/live/telecinco55_ao7nqiq/playlist.m3u8#header:Referer=http%3A%2F%2Fwww.ponlatv.com%2F"],
        ["TVE 1", "tve1.png", "http://hlslive.rtve.es/LA1_LV3_IPH/master.m3u8"],
        ["TVE2", "tve2.png", "http://hlslive.rtve.es/LA2_LV3_IPH/master.m3u8"],
        ["TVE 24h", "tve24h.png", "http://hlslive.rtve.es/24H_LV3_IPH/master.m3u8"],
    ];
    var channels = [];
    for (var ii = 0; ii < data.length; ii++) {
        var item = data[ii];
        channels.push({
            title: item[0],
            country: "es",
            image: item[1],
            background_color: "#fff",
            content_url: item[2],
        });
    }
    req.reply(channels);
}
