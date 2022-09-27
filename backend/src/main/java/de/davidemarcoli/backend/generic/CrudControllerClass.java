package de.davidemarcoli.backend.generic;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface CrudControllerClass {
    Class<?> entityClass() default Object.class;
    Class<?> idClass() default Integer.class;
}
