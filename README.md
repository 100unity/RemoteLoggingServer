# [EXPERIMENTAL] RemoteServer
 
currently only relaying tcp packages on the console, might be used for data analysis, game state sharing or other second-screen experiences later...

start program by running ``npm start``

## syntax

change player state:
``(HP|THR|HNG|SNT)/+-value``
, with value being either a positive or negative Integer. The ``+`` can be omitted

save or load game:
``(SAVE|LOAD)/``
