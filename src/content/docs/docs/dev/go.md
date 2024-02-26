---
title: Go
---

## Snippets

Reusable snippets.

### Interface assertion

Go's interfaces are implicit, but this can be frustrating when trying to debug
missing or incorrect receiver function implementations as you will only be
warned at the call-site of the interface usage.


```go
var _ InterfaceType = (*ImplementationType)(nil)
```

The best part is, this doesn't actually assign or construct anything, so there's 
no run-time overhead.

A full example:

```go
type DB interface {
  GetUser(id uuid.UUID) error
}

type PostgresDB struct {
  conn *pgx.Conn
}

func (db *PostgresDb) GetUser(id uuid.UUID) error  {
  // do stuff
}

var _ DB = (*PostgresDB)(nil)
```

### Reading all input from `stdin`

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}
```

Usage:

```bash
cat <<EOF | go run main.go --
apple
banana
waffle
EOF
```
