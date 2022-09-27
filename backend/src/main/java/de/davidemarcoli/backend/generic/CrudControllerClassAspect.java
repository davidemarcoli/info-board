package de.davidemarcoli.backend.generic;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class CrudControllerClassAspect {

    @Around("@annotation(CrudControllerClass)")
    public Object addExtends(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println(joinPoint);

        System.out.println("Input :\n" + joinPoint.getArgs()[0]);

        HttpServletRequest servletRequest = (HttpServletRequest) joinPoint.getArgs()[1];

        System.out.println(servletRequest.getRemoteAddr());

        Object result = joinPoint.proceed();

        System.out.println(result);

        return result;
    }
}

