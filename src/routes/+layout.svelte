<script>
    import '../lib/style/global.css'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();
</script>


<slot />
