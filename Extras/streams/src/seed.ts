import fs from 'fs';

const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum accusamus unde repudiandae sequi iure nam delectus cupiditate rem nihil quas in, sapiente officia, soluta perspiciatis voluptatibus voluptate facere nisi.`

fs.writeFileSync('src/TextFile/textfile.txt', "utf8")
for (let i = 0; i < 400000; i++) {
    fs.appendFileSync('src/TextFile/textfile.txt', data)
}