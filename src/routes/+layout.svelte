<script>
    import '../lib/style/global.css'
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
injectAnalytics
injectSpeedInsights();
</script>


<slot />
