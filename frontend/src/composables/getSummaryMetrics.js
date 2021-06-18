import { ref } from 'vue'

const getSummaryMetrics = () =>{
    const metrics = ref([])
    const error = ref(null)

    const load = async () =>{
      try {
        let data = await fetch('http://127.0.0.1:8000/summary_metrics/')
        console.log(data)
        if (!data.ok){
          throw Error('no data available')
        }
        metrics.value = await data.json()
      }
      catch (err){
        error.value = err.message
        console.log(error.value)
      }
    }
    return {metrics, error, load}
}

export default getSummaryMetrics
