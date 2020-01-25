# RemoteServer
 
This server allows us to manipulate the game state via command line. It logs player positions and state and allows for manipulation of player state and inventory. You can also set the game time via console or save/load the game.

start program by running ``npm start``, node.js is required to run the RemoteServer

## syntax

change player state:
``(HP|THR|HNG|SNT)/+-value``
, with value being either a positive or negative Integer. The ``+`` can be omitted. It will change the current value by that amount.

save or load game:
``(SAVE|LOAD)/<filename>``, there is no need to specify a file type, it will be ``.json``

change the time in-game:
``TIME/<value>``, with value beeing a floating point number between ``0.0`` and ``1.0``

add resources:
``ITEM/(WOOD|STONE|IRON)``, this will add 10 wood/stone/iron to the players inventory
