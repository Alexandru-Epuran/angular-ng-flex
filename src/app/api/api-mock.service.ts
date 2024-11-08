import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable()
export class ApiMockService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith("/users") && req.method === "GET") {
            const mockData = [
                { id: 1, name: "John Doe", email: "john.doe@example.com" },
                { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
            ];
            return of(new HttpResponse({ status: 200, body: mockData }));
        }

        if (req.url.endsWith("/users") && req.method === "POST") {
            const newUser = req.body;
            newUser.id = Math.floor(Math.random() * 1000);
            return of(new HttpResponse({ status: 201, body: newUser }));
        }

        // Pass through other requests
        return next.handle(req);
    }
}
