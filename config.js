

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["958704260986597397", ""], 
  mongodbUri : "mongodb+srv://srichmomd2018:Lara2025@discordbot.rzytc2i.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "WSS Music",
      password: "foxlaneacademy",
      host: "5.39.63.207",
      port:  2613,
      secure: false
    }
  ]
}
