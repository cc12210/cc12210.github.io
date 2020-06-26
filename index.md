私以为GO语言闭包与JS很相似，记录一下GO的学习过程

```go
func calc(base int) (func(int) int, func(int) int) {
	add := func(addSum int) int {
		base += addSum
		return base
	}
	sub := func(subSum int) int {
		base -= subSum
		return base
	}
	return add, sub
}

func main() {
	add, sub := calc(100)
	fmt.Println(add(55))
	fmt.Println(sub(55))
}
```
