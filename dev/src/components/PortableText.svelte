<script>
  import PortableText from "@portabletext/svelte"
  export let body
  console.log(body)
</script>

<PortableText
  blocks={body}
/>
