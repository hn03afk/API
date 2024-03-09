import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://efbyedgepofntrtamtpo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmYnllZGdlcG9mbnRydGFtdHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MTc0ODIsImV4cCI6MjAyMjM5MzQ4Mn0.F8ZtqvVPIrjdwltW5aFnplKstNwaMOMAWWRSrN2bvdw"
const supabase = createClient(supabaseUrl, supabaseKey)

async function getNotes() {
    const { data, error } = await supabase
      .from('control')
      .select()
      return { data, error }
}

async function addNote(){
const { data, error } = await supabase
  .from('control')
  .insert({  nom: 'Denmark', prenom:'prout', score: 4 , triche: false})
  .select()

  return { data, error }
}

export {getNotes, addNote}