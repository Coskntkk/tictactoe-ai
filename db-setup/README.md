# DB Setup

1. Go to db-setup folder and import dependendices

```
$ cd db-setup
$ npm i
```

2. Run `moves_list.py` to write a .json file with list of all moves.

```
const move = {
    table: "         ",
    target: 0
}
```
> In this example, the AI will move to  the top-left tile in an empty table

3. Start the server

```
$ npm start
```

4. Go to ```localhost:6000/populate``` to populate the db with `moves.json`.

> That may take time
