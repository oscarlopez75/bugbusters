import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {

  }

  getAllPosts(){
    return this.http.get('/routes/posts/').map((posts) => {
      return posts;
    })
  }

}
