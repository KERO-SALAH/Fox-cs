The `this` keyword can be used to invoke another constructor of the same class. For example, you can rewrite the `Circle` class as follows:

```java
public class Circle {

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public Circle() {
        this(1.0);
    }

    // ...
}
```

The line `this(1.0)` in the second constructor invokes the first constructor with a `double` value argument.

**Note:**

Java requires that the `this(arg-list)` statement appear first in the constructor before any other executable statements.

**Tip:**

If a class has multiple constructors, it is better to implement them using `this(arg-list)` as much as possible. In general, a constructor with no or fewer arguments can invoke a constructor with more arguments using `this(arg-list)`. This syntax often simplifies coding and makes the class easier to read and to maintain.
