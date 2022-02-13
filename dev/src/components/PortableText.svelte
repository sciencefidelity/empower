<script>
  import PortableText from "@portabletext/svelte"
  export let body
</script>

<PortableText
  blocks={body}
/>
