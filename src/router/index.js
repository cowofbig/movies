import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie/movie.vue'
import cinema from '@/components/cinema/cinema.vue'
import mine from '@/components/mine/mine.vue'
import city from '@/components/movie/movieComponents/city.vue'
import nowPlaying from '@/components/movie/movieComponents/nowPlaying.vue'
import comingSoon from '@/components/movie/movieComponents/comingSoon.vue'
import search from '@/components/movie/movieComponents/search.vue'


import cinemaDefaultList from '@/components/cinema/cinemaComponents/cinemaDefaultList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: movie,
      children:[
      	{
      		path:'city',
      		component:city
      	},
      	{
      		path:'nowPlaying',
      		component:nowPlaying
      	},
      	{
      		path:'comingSoon',
      		component:comingSoon
      	},
      	{
      		path:'search',
      		component:search
      	},
      	{
      		path:'/movie',
      		redirect:'/movie/nowPlaying'
      	}
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema,
      children:[
      	{
      		path:'cinemaDefaultList',
      		component:cinemaDefaultList
      	},
      	{
      		path:'/cinema',
      		redirect:'/cinema/cinemaDefaultList'
      	}
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
    	path:'/*',
    	redirect:'/movie/nowPlaying',
      component:nowPlaying
    }
  ]
})
