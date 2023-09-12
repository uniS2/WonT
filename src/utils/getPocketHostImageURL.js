export const getPocketHostImageURL = (item, fileName = 'image') =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[fileName]
  }`;

// https://wont.pockethost.io/api/files/3sg7qawa3mrb4f6/5hia5uv2ynzrenv/undefined
// https://wont.pockethost.io/api/files/3sg7qawa3mrb4f6/5hia5uv2ynzrenv/my_schedule_detail_page_seoul_cheonggyecheon_jdTv94XF5e.svg,my_schedule_detail_page_seoul_ddp_MMmkDYJSAm.svg,my_schedule_detail_page_seoul_tower_Z3hFmClIGW.svg
// item.place[0]
//src="https://wont.pockethost.io/api/files/3sg7qawa3mrb4f6/5hia5uv2ynzrenv/my_schedule_detail_page_seoul_cheonggyecheon_jdTv94XF5e.svg"
