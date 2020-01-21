fun <T : Comparable<T>> List<T>.quickSort(): List<T> = when {

size < 2 -> this

else -> {

val pivot = first()

val (smaller, greater) = drop(1).partition { it <= pivot }

smaller.quickSort() + pivot + greater.quickSort()

}

}


fun main() {

print(listOf(5, 0, 1, 5, 3, 7, 4, 2).quickSort())

}
