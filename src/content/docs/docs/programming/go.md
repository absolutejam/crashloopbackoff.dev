---
title: Go
---

## Snippets

Reusable snippets.

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
