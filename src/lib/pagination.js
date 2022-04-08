import constrain from '$lib/constrain.ts'
import { goto } from '$app/navigation'

class PageHandler {
  constructor(meta, page) {
    this.page = page
    this.postCount = meta.pagination.total
    this.postsPerPage = meta.pagination.pageSize
    this.lastPage = meta.pagination.pageCount

    if (page.url.searchParams.has('page')) {
      this.pageNum = constrain(page.url.searchParams.get('page'), 1, this.lastPage)
    } else {
      this.pageNum = 1
    }
  }

  changePageBy(n) {
    this.pageNum = constrain(this.pageNum + n, 1, this.lastPage)
    this.calcMinMax()
    this.page.url.searchParams.set('page', this.pageNum)
    goto(this.page.url.toString())
    console.log(this.pageNum)
  }
}

export default PageHandler
